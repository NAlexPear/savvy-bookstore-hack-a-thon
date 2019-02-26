export default function Form() {
    return `
        <form>
            <label for="title">Book Title</label>
            <input type="text" id="title" name="name" required>

            <label for="author">Author</label>
            <input type="text" id="author" name="author" required>

            <label for="picture url">Book Cover</label>
            <input type="url" id="pic" name="pictureUrl" required>

            <label for="price">Book Price</label>
            <input type="number" id="price" name="price" required>

            <label for="sellingPoints">Selling Points</label>
            <input type="text" id="sellingPoints" name="sellingPoints" required>

            <input type="submit" value="Submit">
            <input type="reset" value="clear">
        </form>
    `}
