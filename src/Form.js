export default function Form() {
    return `
        <form>
            <div>
                <label for="title">Book Title</label>
                <input type="text" id="title" name="name" required>
            </div>

            <div>
                <label for="author">Author</label>
                <input type="text" id="author" name="author" required>
            </div>

            <div>
                <label for="picture url">Book Cover</label>
                <input type="url" id="pic" name="pictureUrl" required>
            </div>

            <div>
                <label for="price">Book Price</label>
                <input type="number" id="price" name="price" required>
            </div>

            <div class='row'>
                <label for="sellingPoints">Selling Points</label>
                <textarea id="sellingPoints" name="sellingPoints" required>
                </textarea>
            </div>

            <div class='row inline'>
                <input type="submit" value="Submit">
                <input type="reset" value="clear">
            </div>
        </form>
    `}
