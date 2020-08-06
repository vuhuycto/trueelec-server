import React, { useState } from 'react';
import axios from 'axios';

import config from './config';

const App = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [data, setData] = useState({
		name: '',
		vendor: '',
		category: 'laptop',
		price: 0,
		numberInStock: 0,
	});
	const [details, setDetails] = useState([]);

	const handleFileChange = (event) => {
		const image = event.target.files[0];
		setSelectedImage(image);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]:
				name === 'price' || name === 'numberInStock'
					? parseFloat(value)
					: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const preparedData = {
				...data,
				details,
				filename: selectedImage.name,
			};
			const response = await axios.post(
				config.hostUrl + '/api/devices',
				preparedData
			);

			const preparedImage = new FormData();
			preparedImage.append(
				'file',
				new File([selectedImage], response.data.image.name, {
					type: selectedImage.type,
				})
			);
			await axios.post(config.hostUrl + '/upload', preparedImage);
		} catch (error) {
			alert('Cannot send data to server');
		}
	};

	const handleAddDetail = (event) => {
		event.preventDefault();
		setDetails([...details, { key: '', value: '' }]);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='image'>Image</label>
					<input
						type='file'
						name='image'
						id='image'
						required
						onChange={handleFileChange}
					/>
				</div>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						id='name'
						value={data.name}
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='vendor'>Vendor</label>
					<input
						type='text'
						name='vendor'
						id='vendor'
						value={data.vendor}
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='price'>Price</label>
					<input
						type='number'
						name='price'
						id='price'
						value={data.price}
						min='0'
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='category'>Category</label>
					<select
						name='category'
						value={data.category}
						id='category'
						onChange={handleChange}
					>
						<option value='laptop'>Laptop</option>
						<option value='phone'>Phone</option>
						<option value='camera'>Camera</option>
					</select>
				</div>
				<div>
					<label htmlFor='number-in-stock'>Number In Stock</label>
					<input
						type='number'
						name='numberInStock'
						id='number-in-stock'
						min='0'
						value={data.numberInStock}
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<p>
						Details <button onClick={handleAddDetail}>+</button>
					</p>
					{details.map((detail, index) => (
						<div key={index}>
							<div>
								<input
									type='text'
									name='key'
									min='0'
									value={detail.key}
									required
									onChange={(event) => {
										const updatedDetails = [...details];
										detail.key = event.target.value;
										setDetails(updatedDetails);
									}}
								/>
								<input
									type='text'
									name='value'
									min='0'
									value={detail.value}
									required
									onChange={(event) => {
										const updatedDetails = [...details];
										detail.value = event.target.value;
										setDetails(updatedDetails);
									}}
								/>
							</div>
						</div>
					))}
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default App;
