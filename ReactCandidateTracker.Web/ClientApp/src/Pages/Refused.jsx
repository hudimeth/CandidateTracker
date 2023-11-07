import Table from '../Components/Table'

const Refused = () => {
    return (
        <div className='container pt-3'>
            <div className='row'>
                <h1 className='offset-5'>Refused:</h1>
                <Table status={'Refused'} />
            </div>
        </div>
        )
}
export default Refused;