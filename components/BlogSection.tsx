// components/BlogSection.tsx
import { BlogItem } from '@/constants/types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface BlogSectionProps {
  posts: BlogItem[];
  onReadMore?: (post: BlogItem) => void;
  onViewAllBlogs?: () => void;
  limit?: number;
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts, onReadMore, onViewAllBlogs, limit = 2 }) => {
  const displayedPosts = posts.slice(0, limit);

  return (
    <View className="px-4">
      {displayedPosts.map((post) => (
        <View
          key={post.slug}
          className="bg-white p-6 rounded-xl mb-4 shadow-sm border-l-4 border-primaryAction"
        >
          <Text className="text-xl font-bold text-primaryText">
            {post.title}
          </Text>
          <Text className="text-base text-secondaryText mt-2 leading-6">
            {post.excerpt}
          </Text>
          <TouchableOpacity
            className="self-end mt-4"
            onPress={() => onReadMore && onReadMore(post)}
          >
            <Text className="text-base font-bold text-primaryAction">
              Read More
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      {posts.length > limit && (
        <TouchableOpacity
          className="mt-4 py-3 bg-accentHighlight rounded-full items-center justify-center shadow-sm"
          onPress={onViewAllBlogs}
        >
          <Text className="text-base font-bold text-primaryText">
            View All Insights
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BlogSection;