import { getAccessToken } from '../lib/firebaseAuth';
import firebaseConfig from '../../firebase-applet-config.json';

export interface DriveImageFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webContentLink?: string;
  directUrl: string;
}

export const DEFAULT_DRIVE_FOLDER_ID = '1isHGmUlNoMRrrVKpn_C4jnr3xA54HM_d';

export const getDirectDriveImageUrl = (fileId: string, size = 1600): string => {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
};

export const fetchDriveFolderImages = async (folderId: string = DEFAULT_DRIVE_FOLDER_ID): Promise<DriveImageFile[]> => {
  try {
    const accessToken = await getAccessToken();
    const headers: Record<string, string> = {};

    let url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&fields=files(id,name,mimeType,thumbnailLink,webContentLink)&pageSize=50`;

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    } else if (firebaseConfig.apiKey) {
      url += `&key=${firebaseConfig.apiKey}`;
    }

    const response = await fetch(url, { headers });
    if (!response.ok) {
      console.warn('Drive folder fetch response not ok:', response.status, response.statusText);
      return [];
    }

    const data = await response.json();
    if (!data.files || !Array.isArray(data.files)) {
      return [];
    }

    const imageFiles: DriveImageFile[] = data.files
      .filter((file: any) => file.mimeType?.startsWith('image/'))
      .map((file: any) => ({
        id: file.id,
        name: file.name,
        mimeType: file.mimeType,
        thumbnailLink: file.thumbnailLink,
        webContentLink: file.webContentLink,
        directUrl: getDirectDriveImageUrl(file.id, 1600),
      }));

    return imageFiles;
  } catch (error) {
    console.error('Error fetching Google Drive images:', error);
    return [];
  }
};
