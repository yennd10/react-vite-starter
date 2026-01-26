const EricComponent = () => {
    // const name = "hoi dan id";
    const info = {
        name: "Yen",
        age: 38
    };

    const { name, age} = info;

    const arr = [1, 2, 3, true, { name: "Eric"}];

    return (
        <div>
            <h1 style={{ color: "red", fontSize: "20px" }}>Hello {JSON.stringify(arr)}</h1>
            {/* <img 
            src="https://i.imgur.com/yXOvdOSs.jpg" 
            alt="Hedy Lamarr" 
            className="photo"
            /> */}
            <ul>
                <li>Invent new traffic lights </li>
                <li>Rehearse a movie scene </li>
                <li>Improve the spectrum technology</li>
            </ul>
        </div>
    );
}

export default EricComponent;