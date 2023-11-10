import React, { useEffect, useState } from 'react';
import Select from '../../Components/Select/Select';
import styles from './styles.module.css';
import ProductsCharts from '../../Components/ProductsCharts/ProductsCharts';
import products from '../../products.json';
import { getData } from '../../utils/helpers';

const AllProductsPage = () => {
  const [data] = useState(products);
  const [filter, setFilter] = useState('all');
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(getData(data, filter));
  }, [filter, data]);

  const saveFilter = (value) => {
    setFilter(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <span>Фильтр по типу продукции</span>
        <Select saveFilter={saveFilter} />
      </div>
      <div className={styles.charts}>
        <ProductsCharts data={data} productsData={productsData} />
        <div className={styles.labels}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <div
              className={styles.labelBlock}
              style={{ backgroundColor: 'red' }}
            ></div>
            <span style={{ color: 'red' }}>Фабрика А</span>
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <div
              className={styles.labelBlock}
              style={{ backgroundColor: 'blue' }}
            ></div>
            <span style={{ color: 'blue' }}>Фабрика Б</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
