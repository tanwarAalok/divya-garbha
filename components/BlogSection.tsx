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
    <View>
      {displayedPosts.map((post, index) => (
        <View
          key={index}
          className="bg-white p-medium rounded-medium mb-small border-l-4 border-primaryAction shadow-sm"
        >
          <Text className="text-base font-bold text-secondaryText">
            {post.title}
          </Text>
          <Text className="text-sm text-secondaryText mt-1">
            {post.excerpt}
          </Text>
          <TouchableOpacity
            className="self-end mt-small py-small/2 px-small" // `py-small/2` or `px-small` if SPACING has custom values or use Tailwind defaults. Nativewind allows arbitrary values like `p-[8px]` for custom spacing.
            onPress={() => onReadMore && onReadMore(post)}
          >
            <Text className="text-sm font-bold text-primaryAction">
              Read More
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      {posts.length > limit && ( // Show "View All" only if there are more posts than the limit
        <TouchableOpacity
          className="mt-medium py-medium bg-accentHighlight rounded-full items-center justify-center shadow-sm"
          onPress={onViewAllBlogs}
        >
          <Text className="text-base font-bold text-primaryText">
            View All Blogs
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BlogSection;