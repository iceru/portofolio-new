"use client"

import { useRef, useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
import { baseUrl } from '../lib/utils';
import { ProjectType } from '../interface';

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [successUpload, setSuccessUpload] = useState<boolean | null>(false);
    const [projects, setProjects] = useState<ProjectType[]>();
    const [project, setProject] = useState<number>(1);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        setSuccessUpload(false);

        if (selectedFile) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(objectUrl);
        }
    };

    const getProjects = async () => {
        const res = await fetch(`${baseUrl}/api/projects`);

        if (res.ok) {
            const data = await res.json();
            setProjects(data);
            setProject(data[0].id);
        }
    }


    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch(`${baseUrl}/api/images/upload?id=${project}`, {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            setPreviewUrl(null);
            setFile(null);
            setSuccessUpload(true);

            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <div className='text-white p-8'>
            <div className="flex items-center gap-4 mb-4">
                <p>Select Projects</p>
                <select name="projects" id="" className='bg-gray-900' onChange={(e) => setProject(parseInt(e.target.value))}>
                    {projects?.map((project) => {
                        return (
                            <option className='bg-gray-900' key={project.id} value={project.id}>{project.name}</option>
                        )
                    })}
                </select>
            </div>
            <h1 className='text-xl mb-4'>Image Upload</h1>

            <div className='mb-4'>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className='bg-white text-gray-900 p-2 rounded-lg mr-4'
                    onChange={handleFileChange}
                />

                {previewUrl && (
                    <div style={{ margin: '1rem 0' }}>
                        <p>Preview:</p>
                        <img src={previewUrl} alt="Preview" width={300} />
                    </div>
                )}

                <button
                    onClick={handleUpload}
                    className='border border-white px-4 py-2 rounded-lg'
                    disabled={!file}
                >
                    Upload
                </button>
            </div>

            {successUpload && (
                <div className='text-xl'>
                    Success Upload!
                </div>
            )}
        </div>
    );
}
