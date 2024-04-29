import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Meme } from './meme.model'

export class MemeApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Meme>,
  ): Promise<Meme[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/memes${buildOptions}`)
  }

  static findOne(
    memeId: string,
    queryOptions?: ApiHelper.QueryOptions<Meme>,
  ): Promise<Meme> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/memes/${memeId}${buildOptions}`)
  }

  static createOne(values: Partial<Meme>): Promise<Meme> {
    return HttpService.api.post(`/v1/memes`, values)
  }

  static updateOne(memeId: string, values: Partial<Meme>): Promise<Meme> {
    return HttpService.api.patch(`/v1/memes/${memeId}`, values)
  }

  static deleteOne(memeId: string): Promise<void> {
    return HttpService.api.delete(`/v1/memes/${memeId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Meme>,
  ): Promise<Meme[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/user/${userId}/memes${buildOptions}`)
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Meme>,
  ): Promise<Meme> {
    return HttpService.api.post(`/v1/users/user/${userId}/memes`, values)
  }
}
