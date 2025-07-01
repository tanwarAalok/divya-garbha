// components/BlogSection.tsx
import { BlogItem } from '@/constants/types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { blogSectionStyles as styles } from './styles';
import { landingPageStyles } from '@/styles/landingPageStyles';
import SectionTitle from '../common/SectionTitle';

interface BlogSectionProps {
  posts: BlogItem[];
  onReadMore?: (post: BlogItem) => void;
  onViewAllBlogs?: () => void; // New prop for viewing all blogs
  limit?: number; // New prop to limit displayed posts
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts, onReadMore, onViewAllBlogs, limit = 2 }) => {
  const displayedPosts = posts.slice(0, limit); 

  return (
    <View>
      {displayedPosts.map((post, index) => (
        <View key={index} style={styles.blogCard}>
          <Text style={styles.blogTitle}>{post.title}</Text>
          <Text style={styles.blogText}>{post.excerpt}</Text>
          <TouchableOpacity style={styles.readMoreButton} onPress={() => onReadMore && onReadMore(post)}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      ))}
      {posts.length > limit && ( // Show "View All" only if there are more posts than the limit
        <TouchableOpacity style={styles.viewAllButton} onPress={onViewAllBlogs}>
          <Text style={styles.viewAllButtonText}>View All Blogs</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BlogSection;