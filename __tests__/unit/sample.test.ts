import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Footer from '@/components/Footer.astro';

test('Footer with loaded', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Footer, {});

  expect(result).toContain('Copyright');
});