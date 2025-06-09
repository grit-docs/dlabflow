import React from 'react';
import Layout from '@theme-original/Layout';
import FloatingChatButton from "../../components/FloatingChatButton";

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
        <FloatingChatButton />
    </>
  );
}
