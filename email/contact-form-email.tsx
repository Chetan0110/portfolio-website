import { Container, Body, Heading, Text, Section, Preview, Hr, Head } from '@react-email/components';
import { Html } from '@react-email/html';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps ={
  senderEmail: string;
  message: string;
}

export default function ContactFormEmail(props: ContactFormEmailProps) {
  const { senderEmail, message } = props;

  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>You received the following message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>This sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
