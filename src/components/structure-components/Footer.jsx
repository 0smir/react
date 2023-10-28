export default function Footer () {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    console.log(currentYear);

    return (
        <footer className="footer">
            <p className="copyrights">All rights reserved, {currentYear}</p>
        </footer>
    )
}