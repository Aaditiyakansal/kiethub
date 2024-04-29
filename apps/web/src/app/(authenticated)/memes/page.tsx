'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Col, Row, Avatar, Button, Space } from 'antd'
import { LikeOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MemeFeedPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [memes, setMemes] = useState<Model.Meme[]>([])

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const memesFound = await Api.Meme.findMany({
          includes: ['user', 'likes'],
        })
        setMemes(memesFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch memes', { variant: 'error' })
      }
    }

    fetchMemes()
  }, [])

  const handleLike = async (memeId: string) => {
    try {
      const values = { userId }
      await Api.Like.createOneByMemeId(memeId, values)
      enqueueSnackbar('Meme liked successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to like meme', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Explore Memes</Title>
      <Text>Check out the latest memes from our community!</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {memes?.map(meme => (
          <Col xs={24} sm={12} md={8} lg={6} key={meme.id}>
            <Card
              hoverable
              cover={<img alt="meme" src={meme.imageUrl} />}
              actions={[
                <Button
                  icon={<LikeOutlined />}
                  onClick={() => handleLike(meme.id)}
                >
                  Like
                </Button>,
              ]}
            >
              <Card.Meta
                avatar={
                  meme.user?.pictureUrl ? (
                    <Avatar src={meme.user.pictureUrl} />
                  ) : (
                    <Avatar icon={<UserOutlined />} />
                  )
                }
                title={meme.user?.name || 'Unknown User'}
                description={`Posted on ${dayjs(meme.dateCreated).format('YYYY-MM-DD')}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
