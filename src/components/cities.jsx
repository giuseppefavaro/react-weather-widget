const data = ["Milano", "Bologna", "Palermo", "Genova", "Torino"];


const Cities = () => {

    const cityChange = (event) => {
        const selected = event.target.value;
        console.log(selected);
        
    }

    return (

        <section className="card__cities">
            <select onChange={cityChange}>
                {data.map((item, index) => (
                    <option key={index} value={item.toLocaleLowerCase()}>{item}</option>
                ))}
            </select>
        </section>

    );
};


export { Cities }