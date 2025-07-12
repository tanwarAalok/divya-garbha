// components/FAQSection.tsx
import { FAQItem } from '@/constants/types';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface FAQSectionProps {
  faqs: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <View>
      {faqs.map((faq, index) => (
        <View
          key={index}
          className="bg-white rounded-xl mb-4 shadow-sm overflow-hidden"
        >
          <TouchableOpacity
            onPress={() => toggleFAQ(index)}
            className="flex-row justify-between items-center p-6"
          >
            <Text
              className="font-bold text-primaryText flex-1 text-base"
            >
              {faq.question}
            </Text>
            <Text
              className="text-2xl text-primaryAction ml-4 font-bold"
            >
              {openFaqIndex === index ? '−' : '+'}
            </Text>
          </TouchableOpacity>
          {openFaqIndex === index && (
            <View className="px-6 pb-6">
              <Text
                className="text-secondaryText leading-6 text-base"
              >
                {faq.answer}
              </Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default FAQSection;