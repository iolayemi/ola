import Parser from 'rss-parser';

export async function getMediumPosts(username: string, max = 3) {
  const parser = new Parser();
  const feed   = await parser.parseURL(`https://medium.com/feed/@${username}`);
  return feed.items.slice(0, max).map(item => ({
    title: item.title,
    link : item.link,
  }));
}
