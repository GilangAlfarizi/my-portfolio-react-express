import Header from "../components/header"
import Footer from "../components/Footer"
import { Container } from "react-bootstrap"

export default function Works() {
    return (
        <div>
            <Header />
            <main>
                <Container className="py-2">
                    <h1>Works</h1>
                </Container>
            </main>
            <Footer />
        </div>
    )
}