/**
 *
 * @param {Object} st - state containing 🔑s for heading, links, books
 */
export default function(st) {
  return `
  <header>
  <h1>${st.heading}</h1>
  </header>`;
}
