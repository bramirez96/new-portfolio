// ! Copyright (c) 2024, Brandon Ramirez

import { APIFetchOptions } from '../../base-api';
import { Link, LinkTypes, TagLink } from './links';
import { Resource, ResourceTypes } from './resources';

export type ContentfulAPIFetchOptions<
	BodyType = unknown,
	ParamType = unknown
> = APIFetchOptions<BodyType, ParamType> & {
	includeAuthToken?: boolean
}

export type UniqueID = string;

export enum SysTypes {
	Array = 'Array',
	Link  = 'Link',
}

export interface Metadata {
	tags: TagLink[];
}

export interface SysTypeDef<SysType> {
	type: SysType;
}

export interface FileDetails {
	size: number;
}

export interface FileRef {
	url: string;
	details: FileDetails;
	fileName: string;
	contentType: string;
}

export interface Space {
	sys: Link<LinkTypes.Space>;
}

export interface Environment {
	sys: Link<LinkTypes.Environment>;
}

export interface ArrayResponse<ResourceType> {
	sys: SysTypeDef<SysTypes.Array>;
	total: number;
	skip: number;
	limit: number;
	items: ResourceType[];
	includes?: Record<LinkTypes, Resource[]>;
}

export type Tag = Omit<
	Resource<
		ResourceTypes.Tag,
		never,
		{
			version: number;
			visibility: 'public';
			updatedBy: TagLink;
			createdBy: TagLink;
		},
		'revision' | 'locale'
	>,
	'metadata' | 'fields'
> & {
	name: string;
};
