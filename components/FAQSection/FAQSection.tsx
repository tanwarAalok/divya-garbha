import { FAQItem } from '@/constants/types';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { faqSectionStyles as styles } from './styles'; 

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
        <View style={styles.faqCard} key={index}>
          <TouchableOpacity onPress={() => toggleFAQ(index)} style={styles.faqToggle}>
            <Text style={styles.faqQ}>{faq.question}</Text>
            <Text style={styles.faqIcon}>{openFaqIndex === index ? '−' : '+'}</Text>
          </TouchableOpacity>
          {openFaqIndex === index && <Text style={styles.faqA}>{faq.answer}</Text>}
        </View>
      ))}
    </View>
  );
};

export default FAQSection;