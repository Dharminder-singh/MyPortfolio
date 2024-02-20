const Footer = ()=> {

    const date = new Date()
    return(
        <>
        <footer>
            <p>Design by Dharminder Singh CopyRight &copy; {date.getFullYear()}</p>
        </footer>
        </>
    )
}

export default Footer