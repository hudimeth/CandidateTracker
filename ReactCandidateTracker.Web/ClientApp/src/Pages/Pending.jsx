import Table from '../Components/Table'

const Pending = () => {
    return (
        <div className='container pt-3'>
            <div className='row'>
                <h1 className='offset-5'>Pending:</h1>
                <Table status={'Pending'} />
            </div>
        </div>
        )
}
export default Pending;