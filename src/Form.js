export default function Form(){
    return `
        <form>
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" required>
            </div>

            <div>
                <label for="creator">Creator</label>
                <input type="text" id="author" name="creator" required>
            </div>

            <div>
                <label for="image">Cover</label>
                <input type="url" id="pic" name="image" required>
            </div>

            <div>
                <label for="price">Price</label>
                <input type="number" id="price" name="price" required>
            </div>

            <div class='row'>
                <label for="selling_points">Selling Points</label>
                <textarea id="sellingPoints" name="selling_points" required>
                </textarea>
            </div>

            <div class='radio'>
            <input type="radio" name="type" value="book" checked> Book<br>
            <input type="radio" name="category" value="album"> Album<br></br>
            </div>

            <div class='row inline'>
                <input type="submit" value="Submit">
                <input type="reset" value="clear">
            </div>

        </form>
    `;
}
