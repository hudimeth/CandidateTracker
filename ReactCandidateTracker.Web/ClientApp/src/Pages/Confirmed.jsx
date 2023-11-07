import Table from '../Components/Table'

const Confirmed = () => {
    return (
        <div className='container pt-3'>
            <div className='row'>
                <h1 className='offset-5'>Confirmed:</h1>
                <Table status={'confirmed'} />
            </div>
        </div>
    )
}
export default Confirmed;