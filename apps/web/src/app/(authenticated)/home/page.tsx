'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, Row, Col, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<Model.User | null>(null)

  useEffect(() => {
    if (userId) {
      // Since Api.User.find is not available, we need to handle user fetching differently.
      // This example assumes there is an alternative method such as `getUserById` or similar.
      // This is a placeholder for the correct API method to fetch user data.
      // Api.User.getUserById(userId)
      //   .then(setUser)
      //   .catch(() => enqueueSnackbar('Failed to fetch user data', { variant: 'error' }));

      // Temporarily handle user as null or use mocked data until API is corrected.
      console.log(
        'Fetch user logic needs to be implemented by the backend team.',
      )
    }
  }, [userId])

  const navigateToMemes = () => {
    router.push('/memes')
  }

  const navigateToPostMeme = () => {
    router.push('/post-meme')
  }

  return (
    <PageLayout layout="narrow">
      <Title>Welcome to the Meme Portal</Title>
      <Text>Explore and share the funniest memes!</Text>
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={navigateToMemes}
            cover={<Avatar size={64} icon={<UserOutlined />} />}
          >
            <Card.Meta title="Meme Feed" description="View the latest memes" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={navigateToPostMeme}
            cover={<Avatar size={64} icon={<UserOutlined />} />}
          >
            <Card.Meta
              title="Post a Meme"
              description="Share your creativity"
            />
          </Card>
        </Col>
      </Row>
      {user && (
        <div style={{ marginTop: 20 }}>
          <Text>
            Welcome back, {user.name}! Last login:{' '}
            {dayjs(user.dateUpdated).format('DD/MM/YYYY')}
          </Text>
        </div>
      )}
      <Button
        type="primary"
        style={{ marginTop: 20 }}
        onClick={() => router.push('/video')}
      >
        Watch Videos
      </Button>
    </PageLayout>
  )
}
