// noinspection CssUnusedSymbol

import styled from "styled-components";

/**
 * BaseStyle provides basic html styling. This can be used to wrap html or markdown that is rendered to html.
 */
export const BaseStyle = styled.div`
  font-family: "Roboto", "Helvetica Neue", ui-sans-serif, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 1px;
  color: #3d3d3d;

  img {
    max-width: calc(100vw - 220px);
  }

  ul, ol {
    padding-inline-start: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
      color: #3d3d3d;
  }

  h1, h2, h3, h4 {
    font-weight: 100;
    text-align: center;
    word-break: break-word;
    hyphens: auto;
  }

  h1, h2 {
    font-size: 2.8rem;
    margin: 2.4rem 0;
    line-height: 4.2rem;
  }

  h3 {
    font-size: 2rem;
    margin: 1.8rem 0;
    line-height: 3rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height:  1.875rem;
    letter-spacing: 1px;
  }

  h5 {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5rem;
    letter-spacing: 1px;
  }


  code {
    padding:2px;
    background-color:lightgray;
    font-family: 'Courier New', Courier, monospace;
  }

  blockquote {
    border-left: 2px solid #3fab49;
    margin: 0 0 2rem;
    padding: 0 16px;
    clear:both;
  }

  a.reference, a.footnote {
    color : #0c497a;
    text-decoration: none;
  }

  table {
    border : 1px solid rgba(0, 0, 0, 0.1);
    border-spacing: 0;
    border-collapse: collapse;
    margin: 14px 0;

    tr.header td {
      background-color: #0c497a;
      color:white
    }

    td {
      padding: 2px 6px;
      border : 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  img {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  div.footnote {
    font-size: 12px;
  }
`
