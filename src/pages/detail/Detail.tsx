import React, { useState, useEffect } from 'react'
import styles from './Detail.module.css'
import { RouteComponentProps, useParams } from 'react-router-dom'
import axios from 'axios'
import { Spin, Row, Col, DatePicker, Space } from 'antd'
import { Header, Footer, ProductIntro } from '../../components'

const { RangePicker } = DatePicker

interface MatchParams {
  touristRouteId: string
}

export const Detail: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const { touristRouteId } = useParams<MatchParams>()
  const [loading, setLoading] = useState<boolean>(true)
  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try {
        const { data } = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`)
        setProduct(data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
  }, [])
  if (loading) {
    return <Spin size='large' style={{
      marginTop: 200,
      marginBottom: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%'
    }} />
  }
  if (error) {
    return <div>网站出错：{error}</div>
  }
  return (
    <>
      <Header />
      <div className={styles['page-content']}>
        <div className={styles['product-intro-container']}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product.title}
                shortDescription={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p) => p.url)}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{marginTop: 20}} />
            </Col>
          </Row>
        </div>
        <div className={styles['product-detail-anchor']}></div>
        <div className={styles['product-detail-container']} id='feature'></div>
        <div className={styles['product-detail-container']} id='fees'></div>
        <div id='notes' className={styles['product-detail-container']}></div>
        <div id='comments' className={styles['product-detail-container']}></div>
      </div>
      <Footer />
    </>
  )
}
