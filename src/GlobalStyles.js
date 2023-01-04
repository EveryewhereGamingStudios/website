import { createGlobalStyle } from 'styled-components';
import './index.css';

const GlobalStyles = createGlobalStyle`
  header {
    background: linear-gradient(
      180deg,
      rgba(8, 11, 29, 0.6) 0%,
      rgba(8, 11, 29, 0.32) 100%
      );
    padding-left: 4rem;
    padding-right: 4rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 17vh;
    justify-content: space-between;
    z-index: 2;
  }

  footer {
    background: linear-gradient(
      180deg,
      rgba(8, 11, 29, 0.32) 0%,
      rgba(8, 11, 29, 0.6) 100%
      );
    padding-top: 1.875rem;
    height: 100%;
    padding-left: 4rem;
    padding-right: 4rem;
    width: 100%;
    z-index: 2;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }



  .content {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .orange-CTA {
    width: 100%;
    height: 6.25rem;
    background: linear-gradient(180deg, #f9cb2a -25%, #f26929 67.45%);
    box-shadow: 0rem 0.5rem 0rem #a60a00, 0rem 0.5rem 0.625rem #16215b,
      0rem 0.75rem 1.5rem rgba(22, 33, 91, 0.6),
      inset 0rem 0.375rem 0.9375rem #ffe794;
    border-radius: 0.5rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    font-family: "Saira";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3.5625rem;
    text-align: center;
    color: white;
    border: 2px solid #a60a00;
    text-shadow: 0px 0px 2px #a60a00;
    cursor: pointer;
  }

  .orange-CTA:hover {
    background: linear-gradient(180deg, #f26929 -25%, #f9cb2a 67.45%);
  }

  .primary,
  .secondary {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 2rem;
    gap: 0.625rem;
    width: 10.75rem 3.5rem;
    background: #f26929;
    border-radius: 0.3125rem;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
    transition: 0.2s ease-in;
    border: 0.125rem solid transparent;
    font-weight: 700;
    color: white;
    font-family: "Saira";
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
  }

  .primary:hover {
    background: transparent;
    color: #f26929;
    border: 0.125rem solid #f26929;
  }

  .secondary {
    background: transparent;
    color: #f26929;
    border: 0.125rem solid #f26929;
  }

  .secondary:hover {
    background: #f26929;
    color: white;
    border: 0.125rem solid transparent;
  }

  .shy {
    color: rgb(185, 185, 185, 1);
  }
  .shy-disable {
    color: rgb(185, 185, 185, 0.25);
  }

  .social {
    cursor: pointer;
    font-size: 1rem;
    border: 0.1rem solid rgb(217, 217, 217);
    padding: 0.8rem;
    border-radius: 50%;
    color: rgb(217, 217, 217);
    transition: 0.1s ease-in;
  }

  .social:hover {
    color: white;
    border: 0.1rem solid transparent;
    background-color: #f26929;
  }

`;

export default GlobalStyles;
