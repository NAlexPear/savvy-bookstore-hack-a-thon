export default function form() {
    return `
    
<form>
    
    <label for="title">Book Title</label>
    <input type="text" id="title" name="title" required>

    <label for="author">Author</label>
    <input type="text" id="author" name="author" required>

    <label for="picture url">Book Cover</label>
    <input type="image" id="pic" name="pic" required>

    <label for="price">Book Price</label>
    <input type="number" id="price" name="price" required>

    <label for="sellingPoints">Selling Points</label>
    <input type="text" id="sellingPoint" name="sellingPoint" required>

    <input type="submit" value="Submit">
    <input type="reset" value="clear">
    
</form>

    `}