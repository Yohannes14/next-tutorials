export default function PrdouctDetails({ params }: { params: { productId: string } }) {
    return (
        <h1>Details About product:{params?.productId}</h1>
    )

}