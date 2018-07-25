export default function Form(){
    return `
        <form>
            <input type="text" name="title" placeholder="Title">
            <input type="text" name="author" placeholder="Author">
            <input type="URL" name="pictureUrl" placeholder="Cover Picture">
            <input type="number" name="price" placeholder="Price">
            <textarea name="sellingPoints" placeholder="Tell us some good selling points for this book here!"></textarea>
            <input type="submit">
        </form>
  `;
}