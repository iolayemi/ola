const https = require('https');
const fs = require('fs');
const path = require('path');

// Define our placeholder images to download
const placeholderImages = [
  {
    name: 'project1.jpg',
    url: 'https://picsum.photos/seed/project1/800/500',
    description: 'HA Traefik + MetalLB'
  },
  {
    name: 'project2.jpg',
    url: 'https://picsum.photos/seed/project2/800/500',
    description: 'LLM Fine-tuning Rig'
  },
  {
    name: 'project3.jpg',
    url: 'https://picsum.photos/seed/project3/800/500',
    description: 'Azure DevOps IaC'
  },
  {
    name: 'project4.jpg',
    url: 'https://picsum.photos/seed/project4/800/500',
    description: 'Event-Driven Microservices'
  },
  {
    name: 'case1.jpg',
    url: 'https://picsum.photos/seed/case1/800/500',
    description: 'Serverless Pipeline'
  },
  {
    name: 'case2.jpg',
    url: 'https://picsum.photos/seed/case2/800/500',
    description: 'HA Redis on K8s'
  },
  {
    name: 'case3.jpg',
    url: 'https://picsum.photos/seed/case3/800/500',
    description: 'ML Inference API'
  }
];

// Function to download an image from URL and save to file
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image. Status code: ${response.statusCode}`));
        return;
      }
      
      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if an error occurs
        reject(err);
      });
      
      response.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if an error occurs
        reject(err);
      });
    });
  });
}

// Download all placeholder images
async function downloadAllImages() {
  console.log('Starting download of placeholder images...');
  
  for (const image of placeholderImages) {
    const filepath = path.join(__dirname, image.name);
    console.log(`Downloading ${image.description} (${image.name})...`);
    
    try {
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`Error downloading ${image.name}: ${error.message}`);
    }
  }
  
  console.log('All downloads completed!');
}

// Run the download function
downloadAllImages();