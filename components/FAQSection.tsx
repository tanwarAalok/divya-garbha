// components/FAQSection/FAQSection.tsx
import { FAQItem } from '@/constants/types';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// No longer importing faqSectionStyles as styles are now in Tailwind classes
// import { faqSectionStyles as styles } from './styles';

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
          // faqCard style:
          // backgroundColor: COLORS.white -> bg-white
          // padding: SPACING.small -> p-small
          // borderRadius: BORDER_RADIUS.medium -> rounded-medium
          // marginBottom: SPACING.small -> mb-small
          // ...SHADOWS.small -> shadow-sm
          className="bg-white p-small rounded-medium mb-small shadow-sm"
        >
          <TouchableOpacity
            onPress={() => toggleFAQ(index)}
            // faqToggle style:
            // flexDirection: 'row' -> flex-row
            // justifyContent: 'space-between' -> justify-between
            // alignItems: 'center' -> items-center
            className="flex-row justify-between items-center"
          >
            <Text
              // faqQ style:
              // fontWeight: 'bold' -> font-bold
              // color: COLORS.primaryText -> text-primaryText
              // flex: 1 -> flex-1
              // fontSize: FONT_SIZES.medium -> text-base
              className="font-bold text-primaryText flex-1 text-base"
            >
              {faq.question}
            </Text>
            <Text
              // faqIcon style:
              // fontSize: FONT_SIZES.large -> text-lg (or text-xl if 24px)
              // color: COLORS.primaryText -> text-primaryText
              // marginLeft: SPACING.small -> ml-small
              // fontWeight: 'bold' -> font-bold
              className="text-lg text-primaryText ml-small font-bold"
            >
              {openFaqIndex === index ? '−' : '+'}
            </Text>
          </TouchableOpacity>
          {openFaqIndex === index && (
            <Text
              // faqA style:
              // color: COLORS.softText -> text-secondaryText (assuming softText maps to secondaryText)
              // marginTop: SPACING.small -> mt-small
              // lineHeight: 22 -> leading-normal (Tailwind default or custom line-height if defined)
              // fontSize: FONT_SIZES.small -> text-sm
              className="text-secondaryText mt-small leading-normal text-sm"
            >
              {faq.answer}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default FAQSection;