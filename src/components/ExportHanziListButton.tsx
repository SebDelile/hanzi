import { useState } from 'react';
import { useHanzi } from '../contexts/HanziContext';

export function ExportHanziListButton() {
  const { data, isError, isLoading } = useHanzi();

  const [hasExported, setHasExported] = useState(false);
  const [isExportError, setIsExportError] = useState(false);

  const exportHanziList = async () => {
    if (!isError && data) {
      setHasExported(false);
      setIsExportError(false);
      const hanziList = data.map(({ sinogram }) => sinogram).join(' ');
      const clipboardWritePermission = await navigator.permissions.query({
        name: 'clipboard-write' as PermissionName,
      });
      if (['granted', 'prompt'].includes(clipboardWritePermission.state)) {
        try {
          await navigator.clipboard.writeText(hanziList);
          setHasExported(true);
        } catch (e) {
          console.error(e);
          setIsExportError(true);
        }
      } else {
        console.log(
          "You don't have the permission to use the clipbaord. please find the exported list bellow"
        );
        console.log(hanziList);
        setIsExportError(true);
      }
    }
  };
  const icon = isExportError ? '❌' : hasExported ? '✔️' : '';

  return (
    <div onClick={exportHanziList} className="cursor-pointer">
      <span>Exporter les Hanzis</span>
      {icon}
    </div>
  );
}
