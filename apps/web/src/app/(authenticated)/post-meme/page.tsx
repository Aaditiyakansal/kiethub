'use client'

import { Upload, Button, Typography, message, Modal } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
const { Title, Text } = Typography
const { Dragger } = Upload
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PostMemePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState([])
  const [uploading, setUploading] = useState(false)

  const handleUpload = async options => {
    const { file } = options
    setUploading(true)
    try {
      const url = await Api.Upload.upload(file)
      await Api.Meme.createOneByUserId(userId, {
        imageUrl: url,
        expirationTime: dayjs().add(1, 'year').toISOString(),
      })
      setFileList(fileList => [...fileList, { url: url, status: 'done' }])
      enqueueSnackbar('Meme uploaded successfully!', { variant: 'success' })
      router.push('/memes')
    } catch (error) {
      message.error('Upload failed.')
      enqueueSnackbar('Failed to upload meme.', { variant: 'error' })
    } finally {
      setUploading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Post Your Meme</Title>
      <Text type="secondary">Share your funniest memes with the world!</Text>
      <Dragger
        fileList={fileList}
        customRequest={handleUpload}
        beforeUpload={file => {
          const isJpgOrPng =
            file.type === 'image/jpeg' || file.type === 'image/png'
          if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!')
          }
          return isJpgOrPng || Upload.LIST_IGNORE
        }}
        maxCount={1}
        multiple={false}
        listType="picture"
        onRemove={file => {
          setFileList(fileList.filter(f => f.uid !== file.uid))
        }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single upload. Strictly prohibit from uploading company
          data or other band files
        </p>
      </Dragger>
      <Button
        type="primary"
        onClick={() => handleUpload(fileList[0])}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </PageLayout>
  )
}
