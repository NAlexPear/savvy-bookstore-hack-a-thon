export default (state) => `
<form action="#">
  <span>
    <label for="name">Book Title</label>
    <input type="text" id="name" name="bookName" placeholder="Book Title" />
  </span>
  <span>
    <label for="author">Author</label>
    <input type="text" id="author" name="bookAuthor" placeholder="Author" />
  </span>
  <div>
    <label for="url">URL</label>
    <input
      type="url"
      name="url"
      id="url"
      placeholder="https://example.com"
      pattern="https://.*"
      size="30"
      required
    />
  </div>
  <div>
    <label for="price">Price</label>
    <input type="number" id="price" name="priceBook" placeholder="Price" />
  </div>
  <div>
    <label for="sellingPoints">Selling Points</label>
    <textarea
      name="sellingPoints"
      id="sellingPoints"
      cols="30"
      rows="10"
    ></textarea>
  </div>
  <div>
      <input type="submit" value="Submit!"/>
  </div>
</form>
`;
