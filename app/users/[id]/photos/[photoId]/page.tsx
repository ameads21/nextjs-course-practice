interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const PhotosDetails = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <p>User Id {id}</p>
      <p>Photo Id {photoId}</p>
    </div>
  );
};

export default PhotosDetails;
