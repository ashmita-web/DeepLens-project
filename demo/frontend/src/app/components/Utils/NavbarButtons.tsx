// 'use client';

// import Link from 'next/link';
// import styled from 'styled-components';

// interface NavbarButtonProps {
//   text: string;
//   href: string;
//   onClick?: () => void;
// }

// const NavbarButton: React.FC<NavbarButtonProps> = ({ text, href, onClick }) => {
//   const ButtonContent = (
//     <button className="button" data-text={text}>
//       <span className="actual-text">&nbsp;{text}&nbsp;</span>
//       <span aria-hidden="true" className="hover-text">&nbsp;{text}&nbsp;</span>
//     </button>
//   );

//   return (
//     <StyledWrapper>
//       {href.startsWith('http') ? (
//         <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer">
//           {ButtonContent}
//         </a>
//       ) : (
//         <Link href={href} onClick={onClick}>
//           {ButtonContent}
//         </Link>
//       )}
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .button {
//     margin: 0;
//     height: auto;
//     background: white;
//     padding: 0;
//     border: none;
//     letter-spacing: 1px;
//     text-decoration: none;
//     font-size: var(--fs-size);
//     font-family: Arial, sans-serif;
//     position: relative;
//     text-transform: uppercase;
//     color: white;
//     background: transparent;
//   }


// `;

// export default NavbarButton;

'use client';

import Link from 'next/link';
import styled from 'styled-components';

interface NavbarButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ text, href, onClick }) => {
  return (
    <StyledWrapper>
      {href.startsWith('http') ? (
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer">
          <button className="button">{text}</button>
        </a>
      ) : (
        <Link href={href} onClick={onClick}>
          <button className="button">{text}</button>
        </Link>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    margin: 0;
    height: auto;
    background: white;
    padding: 10px 15px;
    border: none;
    letter-spacing: 1px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: Arial, sans-serif;
    text-transform: uppercase;
    color: white;
    background: transparent;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }

  .button:hover {
    opacity: 0.7;
  }
`;

export default NavbarButton;
