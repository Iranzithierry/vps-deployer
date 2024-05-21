"use client"
import React, { useState } from 'react'
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import ProjectSettings from '@/components/dashboard/forms/project-settings'
import EnvSettings from '@/components/dashboard/forms/env-settings'
import BuildSettings from '@/components/dashboard/forms/build-settings'
import BACKEND_URLS from '@/constants/backend-urls'
import useAxiosAuth from '@/lib/hooks/use-axios-auth'
import { AxiosError } from 'axios'
import { BaseResponse } from '@/types/http'
import { extractErrorValues } from '@/lib/utils'

export default function Page({ searchParams }: { searchParams: { repository: string, project: string } }) {
    const [currentProjectId, setProjectId] = useState(null)
    return (
        <div className="grid gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Project Settings</CardTitle>
                    <CardDescription>Configure your project settings.</CardDescription>
                </CardHeader>
                <ProjectSettings currentProjectId={currentProjectId} submitHandler={submitHandler} project={searchParams.project} repository={searchParams.repository} />
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Environment Variables</CardTitle>
                    <CardDescription>Set environment variables for your project.</CardDescription>
                </CardHeader>
                <EnvSettings currentProjectId={currentProjectId} submitHandler={submitHandler} />
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Build Settings</CardTitle>
                    <CardDescription>Configure your build settings.</CardDescription>
                </CardHeader>
                <BuildSettings currentProjectId={currentProjectId} submitHandler={submitHandler} />
            </Card>
        </div>
    )
}
const submitHandler = async (formData: any, type: string) => {
    try {
        const { data }: { data: BaseResponse } = await useAxiosAuth.post(BACKEND_URLS.CREATE_PROJECTS+type, formData)
        return data;
    } catch (error: any) {
        return { "success": false, "message": error?.response?.data?.detail ??  extractErrorValues(error?.response?.data) ?? error?.response?.data?.message ?? error?.message }
    }
}