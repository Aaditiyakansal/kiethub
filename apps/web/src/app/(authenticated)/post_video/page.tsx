'use client'

import { Upload, Button, Typography, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
const { Title, Paragraph } = Typography
const { Dragger } = Upload
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PostVideo() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [fileList, setFileList] = useState([])

  const handleUpload = async options => {
    const { file } = options
    try {
      const url = await Api.Upload.upload(file)
      setFileList(fileList => [...fileList, { url: url, status: 'done' }])
      enqueueSnackbar('Upload successful!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Upload failed!', { variant: 'error' })
    }
  }

  const props = {
    name: 'file',
    multiple: false,
    maxCount: 1,
    beforeUpload: file => {
      const isLt10M = file.size / 1024 / 1024 < 10
      if (!isLt10M) {
        message.error('File must smaller than 10MB!')
        return Upload.LIST_IGNORE
      }
      return true
    },
    customRequest: handleUpload,
    onRemove: file => {
      setFileList(fileList => fileList.filter(item => item.url !== file.url))
    },
    fileList,
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Post a Video</Title>
      <Paragraph>
        Share your moments with a short video. Please ensure the video does not
        exceed 10MB.
      </Paragraph>
      <Dragger {...props} style={{ padding: 20 }}>
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
        onClick={() => router.push('/video')}
        style={{ marginTop: 16 }}
      >
        Go to Videos
      </Button>
    </PageLayout>
  )
}
