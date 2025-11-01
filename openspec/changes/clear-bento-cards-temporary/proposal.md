# Clear Bento Cards Temporarily

## Why
The features bento grid section needs to be temporarily emptied to prepare for new content while maintaining page layout and spacing. This prevents the page from collapsing visually and preserves the overall design structure.

## What Changes
- Remove all bento card content from the features section grid
- Keep the section header ("Everything You Need") and description text visible
- Maintain the section container with proper spacing/padding to preserve page height
- No visible cards or grid items, but section structure remains intact

## Impact
- **Affected code**: `src/app/_components/features-section.tsx`
- **Affected specs**: `landing-page-features` (new capability)
- **Visual impact**: Bento cards no longer rendered, clean empty state with preserved spacing
- **Temporary**: This is a placeholder state until new content is designed and implemented
- **No breaking changes**: Section structure and exports remain unchanged
