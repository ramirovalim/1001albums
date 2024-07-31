-- CreateTable
CREATE TABLE "albums" (
    "id" SERIAL NOT NULL,
    "discogs_id" INTEGER NOT NULL,
    "display_title" TEXT NOT NULL,
    "resource_url" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "stats" JSONB NOT NULL,
    "type" TEXT NOT NULL,
    "comment" TEXT,
    "uri" TEXT,
    "listened" BOOLEAN NOT NULL DEFAULT false,
    "rating" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "album-infos" (
    "id" SERIAL NOT NULL,
    "discogs_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "genres" TEXT[],
    "styles" TEXT[],
    "uri" TEXT NOT NULL,
    "num_for_sale" INTEGER NOT NULL,
    "lowest_price" DOUBLE PRECISION NOT NULL,
    "notes" TEXT NOT NULL,
    "resource_url" TEXT NOT NULL,
    "main_release" INTEGER NOT NULL,
    "main_release_url" TEXT NOT NULL,
    "most_recent_release" INTEGER NOT NULL,
    "most_recent_release_url" INTEGER NOT NULL,
    "versions_url" TEXT NOT NULL,
    "data_quality" TEXT NOT NULL,

    CONSTRAINT "album-infos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "resource_url" TEXT NOT NULL,
    "uri150" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artists" (
    "id" SERIAL NOT NULL,
    "discogs_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "anv" TEXT NOT NULL,
    "join" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "tracks" TEXT NOT NULL,
    "resource_url" TEXT NOT NULL,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tracks" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "albumInfoId" INTEGER,

    CONSTRAINT "tracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artists-on-album" (
    "artist_discogs_id" INTEGER NOT NULL,
    "album_discogs_id" INTEGER NOT NULL,

    CONSTRAINT "artists-on-album_pkey" PRIMARY KEY ("artist_discogs_id","album_discogs_id")
);

-- CreateTable
CREATE TABLE "feat-artists" (
    "name" TEXT NOT NULL,
    "anv" TEXT NOT NULL,
    "join" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "tracks" TEXT NOT NULL,
    "id" INTEGER NOT NULL,
    "resource-url" TEXT NOT NULL,
    "trackId" INTEGER
);

-- CreateTable
CREATE TABLE "videos" (
    "uri" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,
    "embed" BOOLEAN NOT NULL,
    "albumInfoId" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "albums_discogs_id_key" ON "albums"("discogs_id");

-- CreateIndex
CREATE UNIQUE INDEX "album-infos_discogs_id_key" ON "album-infos"("discogs_id");

-- CreateIndex
CREATE UNIQUE INDEX "artists_discogs_id_key" ON "artists"("discogs_id");

-- CreateIndex
CREATE UNIQUE INDEX "artists-on-album_artist_discogs_id_key" ON "artists-on-album"("artist_discogs_id");

-- CreateIndex
CREATE UNIQUE INDEX "artists-on-album_album_discogs_id_key" ON "artists-on-album"("album_discogs_id");

-- CreateIndex
CREATE UNIQUE INDEX "feat-artists_id_key" ON "feat-artists"("id");

-- CreateIndex
CREATE UNIQUE INDEX "videos_uri_key" ON "videos"("uri");

-- AddForeignKey
ALTER TABLE "album-infos" ADD CONSTRAINT "album-infos_discogs_id_fkey" FOREIGN KEY ("discogs_id") REFERENCES "albums"("discogs_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_id_fkey" FOREIGN KEY ("id") REFERENCES "album-infos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tracks" ADD CONSTRAINT "tracks_albumInfoId_fkey" FOREIGN KEY ("albumInfoId") REFERENCES "album-infos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artists-on-album" ADD CONSTRAINT "artists-on-album_artist_discogs_id_fkey" FOREIGN KEY ("artist_discogs_id") REFERENCES "artists"("discogs_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artists-on-album" ADD CONSTRAINT "artists-on-album_album_discogs_id_fkey" FOREIGN KEY ("album_discogs_id") REFERENCES "album-infos"("discogs_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feat-artists" ADD CONSTRAINT "feat-artists_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "tracks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_albumInfoId_fkey" FOREIGN KEY ("albumInfoId") REFERENCES "album-infos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
