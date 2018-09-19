export default function Input(){
    return `
            <form action="" method="POST" id="bookInput">
                
                <input type="text" name="title" placeholder="Title" required>
                <input type="text" name="creator" placeholder="Author" required>
                <input type="number" name="price" placeholder="Price" required>
                <input type="text" name="image" placeholder="Cover image URL" required>
                <textarea name="selling_points" rows="8" cols="40" placeholder="Blurbs and selling points" reqiured></textarea>
                <div id="radio-buttons">
                    <input type="radio" name="type" value="book">
                    Book
                    <input type="radio" name="type" value="movie">
                    Movie 
                    <input type="radio" name="type" value="music">
                    Music
                </div>
                <input type="submit">
            </form>
            `;
}