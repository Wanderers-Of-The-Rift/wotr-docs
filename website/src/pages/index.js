import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Wanderers of the Rift"
      description="A living design & gameplay archive"
    >
      <main style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
          Wanderers of the Rift
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          A living design & gameplay archive
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          <Link
            className="button button--primary"
            to="/wotr-docs/docs/"
            style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}
          >
            📚 Documentation
          </Link>
          <Link
            className="button button--secondary"
            to="/wotr-docs/docs/art/style-guide/"
            style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}
          >
            🎨 Art Style Guide
          </Link>
          <Link
            className="button button--secondary"
            href="https://github.com/Wanderers-Of-The-Rift/wotr-docs"
            style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}
          >
            💻 GitHub
          </Link>
          <Link
            className="button button--secondary"
            href="https://discord.gg/VkSeepd59S"
            style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}
          >
            💬 Discord
          </Link>
        </div>
      </main>
    </Layout>
  );
}
