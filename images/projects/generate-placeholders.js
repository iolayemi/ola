const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Define colors
const colors = {
  project1: { bg: '#0B1F3F', accent: '#00DFD8' },
  project2: { bg: '#2A0845', accent: '#6441A5' },
  project3: { bg: '#203A43', accent: '#0070F3' },
  project4: { bg: '#1A2A35', accent: '#FF7A1A' },
  case1: { bg: '#0F2027', accent: '#00DFD8' },
  case2: { bg: '#1E293B', accent: '#6441A5' },
  case3: { bg: '#112240', accent: '#FF7A1A' }
};

// Define image configurations
const images = [
  { filename: 'project1.jpg', title: 'HA Traefik + MetalLB' },
  { filename: 'project2.jpg', title: 'LLM Fine-tuning Rig' },
  { filename: 'project3.jpg', title: 'Azure DevOps IaC' },
  { filename: 'project4.jpg', title: 'Event-Driven Microservices' },
  { filename: 'case1.jpg', title: 'Serverless Pipeline' },
  { filename: 'case2.jpg', title: 'HA Redis on K8s' },
  { filename: 'case3.jpg', title: 'ML Inference API' }
];

// Function to create a placeholder image
function createPlaceholderImage(filename, title, width = 800, height = 500) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  const color = colors[filename.replace('.jpg', '')] || { bg: '#112240', accent: '#00DFD8' };

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, color.bg);
  gradient.addColorStop(1, darkenColor(color.bg, 20));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add some pattern
  ctx.strokeStyle = color.accent + '33'; // Add transparency
  ctx.lineWidth = 1;
  
  // Draw grid lines
  const gridSize = 40;
  for (let x = 0; x < width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  
  for (let y = 0; y < height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Add diagonal lines for tech feel
  for (let i = 0; i < 5; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y + 100);
    ctx.stroke();

    // Add circle nodes
    ctx.fillStyle = color.accent + '66'; // Add transparency
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.arc(x + 100, y + 100, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Add overlay gradient for text area
  const overlay = ctx.createLinearGradient(0, height * 0.6, 0, height);
  overlay.addColorStop(0, 'rgba(0, 0, 0, 0)');
  overlay.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
  ctx.fillStyle = overlay;
  ctx.fillRect(0, 0, width, height);

  // Add title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '30px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(title, width / 2, height - 30);

  // Save the image
  return canvas.toBuffer('image/jpeg');
}

function darkenColor(hex, percent) {
  // Strip hash if present
  hex = hex.replace(/^#/, '');
  
  // Convert to RGB
  let r = parseInt(hex.substr(0, 2), 16);
  let g = parseInt(hex.substr(2, 2), 16);
  let b = parseInt(hex.substr(4, 2), 16);
  
  // Darken
  r = Math.max(0, Math.floor(r * (100 - percent) / 100));
  g = Math.max(0, Math.floor(g * (100 - percent) / 100));
  b = Math.max(0, Math.floor(b * (100 - percent) / 100));
  
  // Convert back to hex
  const darkenedHex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return '#' + darkenedHex;
}

// Generate and save all images
function generateAllImages() {
  console.log('Generating placeholder images...');
  
  images.forEach(image => {
    console.log(`Creating ${image.filename} - ${image.title}`);
    const imageBuffer = createPlaceholderImage(image.filename, image.title);
    
    fs.writeFileSync(path.join(__dirname, image.filename), imageBuffer);
    console.log(`Saved ${image.filename}`);
  });
  
  console.log('All placeholder images created successfully!');
}

// Run the function to generate all images
generateAllImages();