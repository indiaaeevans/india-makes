export interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const allTags = ['Pattern Review', 'Self Drafting', 'Tutorial', 'Idea', 'Work in Progress'];

export const posts: Post[] = Array.from({ length: 30 }, (_, i) => {
  // Shuffle the allTags array
  const shuffled = [...allTags].sort(() => 0.5 - Math.random());
  // Take 1 to 3 unique tags
  const postTags = shuffled.slice(0, Math.floor(Math.random() * 3) + 1);
  
  return {
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    excerpt: `This is a short excerpt for blog post ${i + 1}. It gives a brief overview of the post's content.`,
    date: new Date(2023, 0, i + 1).toISOString().split('T')[0],
    tags: postTags
  };
});

export const getAllTags = () => [...new Set(posts.flatMap(post => post.tags))];

