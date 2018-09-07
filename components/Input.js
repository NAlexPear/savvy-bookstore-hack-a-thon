export default function Input() {
    return `
            <form action="" method="POST" id="bookInput">
                <input type="text" name="name" placeholder="Title" required>
                <input type="text" name="author" placeholder="Author" required>
                <input type="text" name="price" placeholder="Price" required>
                <input type="text" name="pictureUrl" placeholder="Cover image URL" required>
                <textarea name="title" rows="8" cols="40" name="sellingPoints" placeholder="Blurbs and selling points" reqiured></textarea>
                <input type="submit">
            </form>
            `;
}