# Implementation Plan

- [x] 1. Create responsive utility hooks and components


  - Create useMediaQuery hook for viewport detection
  - Create useViewport hook that returns breakpoint information (isMobile, isTablet, isDesktop)
  - Ensure hooks work client-side only to avoid SSR issues
  - _Requirements: 1.2, 1.3_



- [ ] 2. Implement mobile navigation system
- [ ] 2.1 Create MobileHeader component
  - Create new component with hamburger menu button
  - Display app logo/title
  - Show current page indicator


  - Position fixed at top on mobile
  - _Requirements: 2.1, 2.2_

- [ ] 2.2 Update Sidebar component for mobile responsiveness
  - Add isOpen, onClose, and isMobile props
  - Implement two rendering modes (desktop fixed vs mobile overlay)
  - Add slide-in animation for mobile
  - Position as fixed overlay with high z-index on mobile
  - Add close button for mobile view
  - _Requirements: 2.1, 2.2, 2.5_

- [ ] 2.3 Create Backdrop component
  - Create semi-transparent backdrop overlay


  - Handle click events to close sidebar
  - Render only when sidebar is open on mobile
  - Position with appropriate z-index
  - _Requirements: 2.3, 2.4_

- [ ] 2.4 Update main layout with sidebar state management
  - Add state for sidebar open/closed
  - Add state for viewport size detection
  - Integrate MobileHeader for mobile viewports
  - Handle sidebar toggle functionality
  - Close sidebar on menu item selection (mobile only)
  - _Requirements: 2.1, 2.2, 2.4_

- [ ]* 2.5 Write property test for sidebar mobile behavior
  - **Property 5: Sidebar hidden by default on mobile**
  - **Property 6: Sidebar opens as overlay on mobile**
  - **Property 8: Sidebar closes on backdrop click or menu selection**
  - **Validates: Requirements 2.1, 2.2, 2.4**

- [ ]* 2.6 Write property test for sidebar desktop behavior
  - **Property 9: Sidebar fixed on desktop**


  - **Validates: Requirements 2.5**

- [ ]* 2.7 Write property test for backdrop display
  - **Property 7: Backdrop displayed with open sidebar**

  - **Validates: Requirements 2.3**

- [ ] 3. Implement responsive layout for Dashboard component
- [ ] 3.1 Update Dashboard statistics grid
  - Change grid to single column on mobile (< 640px)
  - Use 2 columns on small tablets (640px - 768px)


  - Use 4 columns on desktop (>= 1024px)
  - _Requirements: 4.1, 4.5, 6.4_

- [ ] 3.2 Update Dashboard card grids
  - Stack "Next Timetable Event" and "Next Prayer Time" cards vertically on mobile
  - Display side-by-side on tablet and desktop
  - Stack "Today's Prayer Times" and "System Status" cards vertically on mobile
  - Display side-by-side on tablet and desktop
  - _Requirements: 4.2, 4.3_

- [ ] 3.3 Adjust Dashboard padding and typography
  - Reduce page padding from p-8 to p-4 on mobile
  - Reduce heading from text-4xl to text-2xl on mobile
  - Reduce subheading font size on mobile
  - _Requirements: 5.1, 5.2_

- [ ]* 3.4 Write property test for Dashboard grid responsiveness
  - **Property 4: Grid layouts adapt to viewport size**
  - **Validates: Requirements 1.5, 4.1, 4.2, 4.5, 6.1, 6.4**

- [ ] 4. Implement responsive layout for Timetable component
- [ ] 4.1 Update Timetable page header
  - Stack header content and buttons vertically on mobile
  - Reduce heading size on mobile
  - Make buttons full-width on mobile
  - Reduce padding on mobile
  - _Requirements: 5.1, 5.2_

- [ ] 4.2 Update Timetable form layout
  - Stack all form fields vertically on mobile
  - Use grid-cols-1 for Day/Time/Bell Type on mobile
  - Stack Voice Selection and Preview Voice vertically on mobile
  - Make all inputs and buttons full-width on mobile
  - _Requirements: 4.3, 7.3_

- [ ] 4.3 Update Timetable card list
  - Stack card content and action buttons vertically on mobile
  - Increase button touch targets to 44x44px minimum
  - Add spacing between buttons on mobile
  - _Requirements: 3.1, 3.3_

- [ ]* 4.4 Write property test for form responsiveness
  - **Property 17: Tablet form layout optimization**
  - **Validates: Requirements 6.3**

- [ ] 5. Implement responsive layout for Students component
- [ ] 5.1 Update Students page header
  - Stack header and "Add Student" button vertically on mobile
  - Make button full-width on mobile
  - Reduce heading size and padding on mobile
  - _Requirements: 5.1, 5.2_

- [ ] 5.2 Update Students form layout
  - Stack First Name and Last Name fields vertically on mobile
  - Make all inputs full-width
  - Stack form buttons vertically on mobile
  - _Requirements: 4.3, 7.3_

- [ ] 5.3 Update Students grid
  - Use single column on mobile (< 768px)
  - Use 2 columns on tablet (768px - 1024px)
  - Use 3 columns on desktop (>= 1024px)
  - _Requirements: 4.1, 4.5_

- [ ]* 5.4 Write property test for student grid responsiveness
  - **Property 4: Grid layouts adapt to viewport size**
  - **Validates: Requirements 1.5, 4.1, 4.2, 4.5**

- [ ] 6. Implement responsive layout for Settings component
- [ ] 6.1 Update Settings page layout
  - Stack settings cards vertically on mobile
  - Display side-by-side on desktop
  - Reduce heading size and padding on mobile
  - _Requirements: 4.2, 5.1, 5.2_

- [ ] 6.2 Update Settings form inputs
  - Make all select dropdowns and inputs full-width
  - Ensure input font size is at least 16px to prevent zoom
  - Stack action buttons vertically on mobile
  - _Requirements: 3.4, 7.4_

- [ ]* 6.3 Write property test for minimum font sizes
  - **Property 11: Minimum font size for readability**
  - **Validates: Requirements 3.2, 3.4**

- [ ] 7. Implement responsive touch targets and spacing
- [ ] 7.1 Update Button component sizing
  - Ensure all buttons have minimum 44x44px touch targets on mobile
  - Add adequate spacing between adjacent buttons
  - Increase padding for better touch interaction
  - _Requirements: 3.1, 3.3_

- [ ] 7.2 Update Card component padding
  - Reduce card padding on mobile (from pt-6 to pt-4)
  - Adjust internal spacing for mobile viewing
  - _Requirements: 3.5, 5.5_

- [ ] 7.3 Update Input component sizing
  - Ensure input fields have minimum 16px font size
  - Increase touch target area for mobile
  - Add appropriate padding
  - _Requirements: 3.4_

- [ ]* 7.4 Write property test for touch target sizes
  - **Property 10: Touch targets meet minimum size**
  - **Validates: Requirements 3.1, 3.3, 6.5**

- [ ] 8. Implement responsive typography system
- [ ] 8.1 Create responsive heading classes
  - Define mobile, tablet, and desktop heading sizes
  - Ensure visual hierarchy is maintained (h1 > h2 > h3)
  - Apply to all page headings
  - _Requirements: 5.1, 5.3_

- [ ] 8.2 Update global typography styles
  - Set base font size to 16px minimum
  - Define responsive line heights
  - Adjust letter spacing for mobile readability
  - _Requirements: 3.2_

- [ ]* 8.3 Write property test for responsive typography
  - **Property 15: Responsive typography scaling**
  - **Validates: Requirements 5.1, 5.3**

- [ ] 9. Implement responsive spacing system
- [ ] 9.1 Update page container padding
  - Reduce from p-8 to p-4 on mobile
  - Use p-6 on tablet
  - Keep p-8 on desktop
  - Apply consistently across all pages
  - _Requirements: 5.2_

- [ ] 9.2 Update section margins
  - Reduce mb-8 to mb-4 on mobile
  - Reduce gap-6 to gap-4 on mobile
  - Apply to all grid and flex layouts
  - _Requirements: 5.5_

- [ ]* 9.3 Write property test for responsive spacing
  - **Property 16: Reduced spacing on mobile**
  - **Validates: Requirements 5.2, 5.5**

- [ ] 10. Implement responsive image and icon handling
- [ ] 10.1 Update image styles
  - Add max-w-full to all images
  - Add h-auto to maintain aspect ratio
  - Ensure images don't cause overflow
  - _Requirements: 8.1, 8.5_

- [ ] 10.2 Update icon sizing
  - Ensure consistent icon sizes across breakpoints
  - Verify icons in buttons don't cause overflow
  - Test logo scaling on mobile
  - _Requirements: 8.2, 8.3, 8.4_

- [ ]* 10.3 Write property test for image responsiveness
  - **Property 23: Images scale responsively**
  - **Property 24: Icons sized consistently**
  - **Property 25: Logos scale proportionally**
  - **Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5**

- [ ] 11. Implement overflow prevention
- [ ] 11.1 Add overflow checks to all components
  - Ensure no horizontal overflow on any page
  - Add overflow-x-hidden to body if needed
  - Test all pages at various mobile widths
  - _Requirements: 1.1_

- [ ] 11.2 Update table handling (if tables exist)
  - Make tables horizontally scrollable on mobile
  - Or convert to card-based layout
  - _Requirements: 4.4_

- [ ]* 11.3 Write property test for overflow prevention
  - **Property 1: No horizontal overflow on any viewport**
  - **Property 3: Content reflows vertically on narrow viewports**
  - **Validates: Requirements 1.1, 1.4**

- [ ] 12. Implement modal and dropdown responsiveness
- [ ] 12.1 Update modal sizing
  - Ensure modals fit within viewport on mobile
  - Make modal content scrollable when tall
  - Stack modal buttons vertically on mobile
  - _Requirements: 7.1, 7.2, 7.4_

- [ ] 12.2 Update dropdown positioning
  - Ensure dropdowns stay within viewport bounds
  - Adjust positioning logic for mobile
  - _Requirements: 7.5_

- [ ]* 12.3 Write property test for modal responsiveness
  - **Property 19: Modals fit within viewport**
  - **Property 20: Modal content scrollable when tall**
  - **Property 21: Modal forms and buttons stack on mobile**
  - **Validates: Requirements 7.1, 7.2, 7.3, 7.4**

- [ ]* 12.4 Write property test for dropdown positioning
  - **Property 22: Dropdowns remain in viewport**
  - **Validates: Requirements 7.5**

- [ ] 13. Add tablet-specific optimizations
- [ ] 13.1 Implement tablet sidebar toggle
  - Add toggle button for tablet viewports
  - Allow sidebar to be collapsed on tablet
  - Persist tablet sidebar state
  - _Requirements: 6.2_

- [ ] 13.2 Optimize tablet layouts
  - Verify 2-column grids work well on tablet
  - Test form layouts on tablet
  - Ensure touch targets are adequate
  - _Requirements: 6.1, 6.3, 6.5_

- [ ]* 13.3 Write property test for tablet sidebar
  - **Property 18: Tablet sidebar toggle available**
  - **Validates: Requirements 6.2**

- [ ] 14. Testing and validation
- [ ] 14.1 Test on actual mobile devices
  - Test on iOS Safari
  - Test on Android Chrome
  - Test on various screen sizes (320px - 768px)
  - Verify touch interactions work correctly

- [ ] 14.2 Test on tablet devices
  - Test on iPad Safari
  - Test on Android tablets
  - Verify layouts at 768px - 1024px range

- [ ] 14.3 Test responsive breakpoints
  - Test at exact breakpoint boundaries (640px, 768px, 1024px)
  - Verify no layout breaks or glitches
  - Test orientation changes (portrait/landscape)

- [ ] 14.4 Accessibility testing
  - Test keyboard navigation on mobile
  - Test with screen readers
  - Verify focus management in mobile sidebar
  - Ensure ARIA labels are present

- [ ] 15. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
