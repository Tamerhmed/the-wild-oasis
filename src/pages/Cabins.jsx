import { useEffect } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getCabins } from '../services/apiCabins';
import CabinTable from '../features/cabins/CabinTable';

function Cabins() {
	useEffect(function () {
		getCabins().then((data) => data);
	}, []);

	return (
		<>
			<Row type='horizontal'>
				<Heading as='h1'>All cabins</Heading>
				<p>FILTER AND SORT</p>
			</Row>
			<Row>
				<CabinTable />
			</Row>
		</>
	);
}

export default Cabins;
