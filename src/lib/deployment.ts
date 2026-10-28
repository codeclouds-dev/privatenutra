// Build-time setting: rebuild after changing the indexing policy.
const indexing = process.env.SITE_INDEXABLE;
if (indexing !== undefined && indexing !== 'true' && indexing !== 'false') {
  throw new Error('SITE_INDEXABLE must be true or false.');
}
export const indexingEnabled = indexing !== 'false';
