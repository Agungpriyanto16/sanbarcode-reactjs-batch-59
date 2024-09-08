import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card Section 1 */}
            <div className="mt-10 h-auto w-full bg-white shadow-md rounded-lg flex">
                <img className="w-1/3 rounded-l-lg" src="https://images.bisnis.com/posts/2024/04/30/1761622/ml_11zon_1714433848.jpg" alt="Mobile Legends" />
                <div className="p-5 w-2/3">
                    <h2 className="text-xl font-bold">Mobile Legends</h2>
                    <p className="text-gray-500">2019</p>
                    <p className="text-gray-700 mt-2">
                        Mobile Legends: Bang Bang adalah permainan video seluler ber-genre multiplayer online battle arena yang dikembangkan dan diterbitkan oleh Moonton...
                    </p>
                    <p className="text-sm text-gray-500 mt-2">MOBA 10 MB</p>
                    <p className="font-bold mt-3">Rp. 0,-</p>
                    <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded-full">2 RATINGS</button>
                </div>
            </div>

            {/* Card Section 2 */}
            <div className="mt-10 h-auto w-full bg-white shadow-md rounded-lg flex">
                <img className="w-1/3 rounded-l-lg" src="https://jumpg-assets.tokyo-cdn.com/secure/title/100140/title_thumbnail_portrait_list/326451.jpg?hash=nYvWfNjfa4kw58G27Ip4zQ&expires=2145884400" alt="One Piece" />
                <div className="p-5 w-2/3">
                    <h2 className="text-xl font-bold">One Piece</h2>
                    <p className="text-gray-500">2009</p>
                    <p className="text-gray-700 mt-2">
                        Monkey D. Luffy, juga dikenal sebagai "Luffy Topi Jerami" dan umumnya sebagai "Topi Jerami", adalah pendiri dan kapten dari Bajak Laut Topi Jerami yang semakin terkenal dan kuat, serta yang paling kuat dari petarung topnya.[26][27] Dia ingin menemukan harta karun legendaris yang ditinggalkan oleh mendiang Gol D. Roger dan dengan demikian menjadi Raja Bajak Laut,[28] yang akan membantu memfasilitasi mimpinya yang tidak diketahui yang dia ceritakan hanya kepada Shanks, saudara laki-lakinya, dan krunya. Dia percaya bahwa menjadi Raja Bajak Laut berarti memiliki kebebasan terbesar di dunia...
                    </p>
                    <p className="text-sm text-gray-500 mt-2">RGP 30 MB</p>
                    <p className="font-bold mt-3">Rp. 27,899,-</p>
                    <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded-full">5 RATINGS</button>
                </div>
            </div>

            {/* Card Section 3 */}
            <div className="mt-10 h-auto w-full bg-white shadow-md rounded-lg flex">
                <img className="w-1/3 rounded-l-lg" src="https://play-lh.googleusercontent.com/opydYHj2_Mg7si7_gcEHYtdIL09CU32oqTSTPfBe0a-IL_9hpo6R_TK1l0hBsw1lOkGx" alt="EA FC 24 Mobile" />
                <div className="p-5 w-2/3">
                    <h2 className="text-xl font-bold">EA FC 24 Mobile</h2>
                    <p className="text-gray-500">2021</p>
                    <p className="text-gray-700 mt-2">
                    Permainan Sepak Bola Virtual Step onto the pitch with EA SPORTS FC™ Mobile and experience the UEFA EURO 2024 Tournament. From the match ball and broadcast package, to two real-world stadiums and the coveted trophy, UEFA EURO 2024 on EA SPORTS FC™ Mobile brings you closer to the action....
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Sport 40001 MB</p>
                    <p className="font-bold mt-3">Rp. 0,-</p>
                    <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded-full">5 RATINGS</button>
                </div>
            </div>

            {/* Card Section 4 */}
            <div className="mt-10 h-auto w-full bg-white shadow-md rounded-lg flex">
                <img className="w-1/3 rounded-l-lg" src="image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUXGB0bGBgYGB4fIBobGyAiIB0hHR4gICggHh0mHh4bITEiJSkrLi4uHx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS8tNS0tLS0tLS0vMC8tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAP0AxwMBEQACEQEDEQH/xAAcAAACAwADAQAAAAAAAAAAAAAFBgMEBwECCAD/xABREAACAQIDBAYECAcNCAMBAAABAgMEEQASIQUGMUEHEyJRYXEygZGxFCNCUnKhstEVMzVic5LBFjRTVHSCk6KzwtLh8AgXJENjdcPiJTaDJv/EABsBAAIDAQEBAAAAAAAAAAAAAAAEAgMFAQYH/8QAOREAAQMCAwUFBwQCAwADAAAAAQACAwQREiExBRNBUWEiMnGBkRRSobHB0fAVM0LhI/EGNIJDcpL/2gAMAwEAAhEDEQA/AMr3Y2AKvrLyZMgHyb3vfxHdhulpt/fO1ln11aabDZt734o7/u/X+MH9T/2w5+mD3vgs/wDXD7nx/pc/7v1/jB/U/wDbB+mD3vh/aP1s+58f6VeTcbKTmlYryZEvb6S3v6xfFZ2fhOZy6D6K1u2MQyaL9Tb0P3spYtxEYXWpzDvCg/3sSGzmkXD/AM9VW7bL2mzo7ef9Lv8A7v1/jB/U/wDbHf0we98P7Uf1w+58f6XH+79f4wf1P/bB+mD3vh/a7+tn3Pj/AEh28G6YpoTKJS2oFstuPrxRUUW5ZivdNUe0zUSYMNvNQ7m7qttB5FEojyAG5Um9zbkcJsZiWjLLg4KGLdxmq5aYOCImYPJY2yqbE248eA78UyvEYzV8DDLp4q/u3uPNVgvm6qL5LMpu/kvd44omqmx5alMw0bpc9ArW0+jqaKGSUSK5TUIoNyo4nzA1tiLK1rnBttVOShe1pdfRCd1t346syB6lY" alt="Roblox" />
                <div className="p-5 w-2/3">
                    <h2 className="text-xl font-bold">Roblox</h2>
                    <p className="text-gray-500">2009</p>
                    <p className="text-gray-700 mt-2">
                    Skibidi...
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Open World 48 MB</p>
                    <p className="font-bold mt-3">Rp. 9,999,-</p>
                    <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded-full">4 RATINGS</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
